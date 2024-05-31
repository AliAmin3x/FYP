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

export default function EcommerceCard({ name, price, description, image }) {
  const [isHearted, setIsHearted] = useState(false);
  const toggleHeart = () => {
    setIsHearted((prevState) => !prevState);
  };

  return (
    <Card className="w-80 bg-lightgray h-[500px]">
      <div className=" flex flex-col h-full justify-between">
        <div className=" h-full">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img
              src={image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <Typography color="white" className="font-medium text-sm">
                {name}
              </Typography>
              <Typography color="white" className="font-medium text-sm">
                {price}/-
              </Typography>
            </div>
            <Typography
              variant="small"
              color="white"
              className="font-normal opacity-60 text-xs"
            >
              {description}
            </Typography>
          </CardBody>
        </div>
        <CardFooter className="pt-0 flex flex-row items-center gap-2">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-white text-black hover:bg-cosmicpurple transition duration-300 ease-in-out focus:scale-105 focus:shadow-none active:scale-100 text-xs"
          >
            Add to Cart
          </Button>
          <LuHeart
            className={`w-6 h-6 cursor-pointer stroke-current ${
              isHearted ? "text-cosmicpurple" : "text-gray-400"
            } hover:text-cosmicpurple transition duration-300 ease-in-out`}
            onClick={toggleHeart}
          />
        </CardFooter>
      </div>
    </Card>
  );
}
