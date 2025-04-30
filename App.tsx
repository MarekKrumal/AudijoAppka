import "./global.css";
import { View } from "react-native";
import books from "./src/dummyBooks";
import { StatusBar } from "expo-status-bar";

import BookListItem from "./src/components/BookListItem";

export default function App() {
  return (
    <View className="bg-gray-950 flex-1  justify-center p-4">
      <BookListItem book={books[0]} />
      <BookListItem book={books[1]} />
      <BookListItem book={books[2]} />
      <BookListItem book={books[3]} />

      <StatusBar style="auto" />
    </View>
  );
}
