import "./global.css";
import { View, FlatList } from "react-native";
import books from "./src/dummyBooks";
import { StatusBar } from "expo-status-bar";

import BookListItem from "./src/components/BookListItem";

export default function App() {
  return (
    <View className="bg-gray-950 flex-1  justify-center p-4 pt-20">
      <FlatList
        data={books}
        contentContainerClassName="gap-4"
        renderItem={({ item }) => <BookListItem book={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}
