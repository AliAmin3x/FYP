import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Icon,
} from "@material-tailwind/react";
import { useState } from "react";
import { LuHeart } from "react-icons/lu";

export default function LibraryGameCard() {
  const [isHearted, setIsHearted] = useState(false);
  const toggleHeart = () => {
    setIsHearted((prevState) => !prevState);
  };

  return (
    <Card className="w-80 bg-lightgray">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/656/869/201/call-of-duty-wallpaper-preview.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="white" className="font-medium text-sm">
            Call of Duty Modern Warfare 4
          </Typography>
          <Typography color="white" className="font-medium text-sm">
            5000/-
          </Typography>
        </div>
        <Typography
          variant="small"
          color="white"
          className="font-normal opacity-60 text-xs"
        >
          Call of Duty 4: Modern Warfare is a 2007 first-person shooter video
          game developed by Infinity Ward and published by Activision.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-row items-center gap-2">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-white text-black hover:bg-cosmicpurple transition duration-300 ease-in-out focus:scale-105 focus:shadow-none active:scale-100 text-xs"
        >
          Download
        </Button>
        <LuHeart
          className={`w-6 h-6 cursor-pointer stroke-current ${
            isHearted ? "text-cosmicpurple" : "text-gray-400"
          } hover:text-cosmicpurple transition duration-300 ease-in-out`}
          onClick={toggleHeart}
        />
      </CardFooter>
    </Card>
  );
}
