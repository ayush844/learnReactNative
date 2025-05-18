import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="" >Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity onPress={() => {router.push("/home")}} className="bg-blue-500 p-4 rounded-lg mt-4">
        <Text className="text-white text-2xl font-bold">Go to Tests</Text>
      </TouchableOpacity>

    </View>
  );
}
