import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MouseEvent } from "react";

type ChakraButtonProps = {
  label: string,
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void,
};

export const ChakraButtonTemplate: React.FC<ChakraButtonProps> = props => {
  return (
    <div>
      <ChakraProvider>
        <Button
          onClick={props.onClickHandler}
          bg="blue.800"
          color="blue.300"
          fontSize="lg"
          fontWeight="medium"
          borderRadius="xl"
          border="1px solid transparent"
          _hover={{ borderColor: "blue.700", color: "blue.400" }}
          _active={{ backgroundColor: "blue.800", borderColor: "blue.700" }}
          >
          {props.label}
        </Button>
      </ChakraProvider>
    </div>
  );
};
