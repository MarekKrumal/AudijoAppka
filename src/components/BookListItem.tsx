import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

type Book = {
  id: string;
  title: string;
  author: string;
  thumbnail_url?: string;
  audio_url: string;
};

type BookListItemProps = {
  book: Book;
};

export default function BookListItem({ book }: BookListItemProps) {
  return (
    <Link href="/player" asChild>
      <Pressable className="flex-row gap-4 items-center">
        <Image
          source={{ uri: book.thumbnail_url }}
          className="w-16 aspect-square rounded-md"
        />
        <View className="flex-1 gap-1">
          <Text className="text-green-400 text-2xl font-bold">
            {book.title}
          </Text>
          <Text className="text-green-400">{book.author}</Text>
        </View>

        <AntDesign name="playcircleo" size={24} color="lightgreen" />
      </Pressable>
    </Link>
  );
}
