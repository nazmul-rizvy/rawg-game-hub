import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/use-Games";

interface Props {
  game: IGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
