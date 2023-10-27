import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import Container from "../../components/Container";
import { Botao } from "../../components/Botao";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type CamRef = {
  takePictureAsync: () => Promise<{ uri: any }>;
};

export default function OpenCamera() {
  const camRef = useRef<CamRef>(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  if (!permission) {
    // Camera permissions are still loading

    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <Container>
        <Text style={styles.permissao}>
          Nos precisamos de sua permisão para acessar a camera
        </Text>
        <Botao action={requestPermission} title="Permitir camera" />
      </Container>
    );
  }

  function toggleCameraType() {
    setType((type) =>
      type === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (camRef.current) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data.uri);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonType}
            onPress={toggleCameraType}
          >
            <Text style={styles.text}>Alterar Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styles.buttonFoto} onPress={takePicture}>
        <FontAwesome name="camera" size={23} color={"#FFF"} />
      </TouchableOpacity>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => setOpen(false)}
            >
              <FontAwesome name="window-close" size={50} color="#FF0000" />
            </TouchableOpacity>

            <Image style={styles.image} source={{ uri: capturedPhoto }} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    // margin: 64,
  },
  buttonType: {
    alignSelf: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  buttonFoto: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  permissao: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
