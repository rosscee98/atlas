import { Button, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function NewEntry() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      venueName: "",
      category: "",
      dateTime: "",
      location: "",
      comments: "",
    },
  });

  return (
    <>
      <Text>New Entry screen</Text>
      <View>
        <Text>Venue name</Text>
        <Controller
          name="venueName"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <Text>Category</Text>
        <Controller
          name="category"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <Text>Date/time</Text>
        <Controller
          name="dateTime"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <Text>Location</Text>
        <Controller
          name="location"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <Text>Comments</Text>
        <Controller
          name="comments"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <Button
          title="Create"
          onPress={handleSubmit((data) => console.log(data))}
        />
      </View>
    </>
  );
}
