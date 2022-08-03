export class TakeblipResponseDto {
  itemType: string;
  items: {
    header: {
      type: string;
      value: {
        title: string;
        text: string;
        type: string;
        uri: string;
      };
    };
  }[];
}
