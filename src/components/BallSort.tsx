import React, { ChangeEvent, useState } from "react";
type Ball = { ballColor: string; bottleId: string };
function BallSort() {
  const [bottle1, setBottle1] = useState<Ball[]>([
    { ballColor: "bg-green-700", bottleId: "bottle1" },
    { ballColor: "bg-red-700", bottleId: "bottle1" },
    { ballColor: "bg-green-700", bottleId: "bottle1" },
  ]);
  const [bottle2, setBottle2] = useState<Ball[]>([
    { ballColor: "bg-red-700", bottleId: "bottle2" },
    { ballColor: "bg-green-700", bottleId: "bottle2" },
    { ballColor: "bg-red-700", bottleId: "bottle2" },
  ]);
  const [emptyBottle, setEmptyBottle] = useState<Ball[]>([]);
  const [activeBall, setActiveBall] = useState({ ballColor: "", bottleId: "" });
  const BallsMovementHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    // Bottle1
    if (activeBall.ballColor) {
      if (e.currentTarget.id === "bottle1") {
        if (bottle1.length < 3) {
          bottle1.unshift(activeBall);
          if (activeBall.bottleId === "bottle1") {
            bottle1.shift();
          } else if (activeBall.bottleId === "bottle2") {
            bottle2.shift();
          } else if (activeBall.bottleId === "emptyBottle") {
            emptyBottle.shift();
          }
          bottle1[0].bottleId = "bottle1";
          setActiveBall({ ballColor: "", bottleId: "" });
        }
        // If the active ball is itself belongs to the current tube.
        else if (activeBall.bottleId === "bottle1") {
          setActiveBall({ ballColor: "", bottleId: "" });
        } else {
          alert("Bottle is already full");
        }
      }
      //   Bottle2
      else if (e.currentTarget.id === "bottle2") {
        if (bottle2.length < 3) {
          bottle2.unshift(activeBall);
          if (activeBall.bottleId === "bottle1") {
            bottle1.shift();
          } else if (activeBall.bottleId === "bottle2") {
            bottle2.shift();
          } else if (activeBall.bottleId === "emptyBottle") {
            emptyBottle.shift();
          }
          bottle2[0].bottleId = "bottle2";

          setActiveBall({ ballColor: "", bottleId: "" });
        } // If the active ball is itself belongs to the current tube.
        else if (activeBall.bottleId === "bottle2") {
          setActiveBall({ ballColor: "", bottleId: "" });
        } else {
          alert("Bottle is already full");
        }
      }
      // Bottle3
      else if (e.currentTarget.id === "emptyBottle") {
        if (emptyBottle.length < 3) {
          emptyBottle.unshift(activeBall);
          if (activeBall.bottleId === "bottle1") {
            bottle1.shift();
          } else if (activeBall.bottleId === "bottle2") {
            bottle2.shift();
          } else if (activeBall.bottleId === "emptyBottle") {
            emptyBottle.shift();
          }

          emptyBottle[0].bottleId = "emptyBottle";

          setActiveBall({ ballColor: "", bottleId: "" });
        } // If the active ball is itself belongs to the current tube.
        else if (activeBall.bottleId === "emptyBottle") {
          setActiveBall({ ballColor: "", bottleId: "" });
        } else {
          alert("Bottle is already full");
        }
      }
    }
    // Make the ball active from the tube user clicked on.
    else {
      if (e.currentTarget.id === "bottle1") {
        if (bottle1[0].ballColor) {
          setActiveBall(bottle1[0]);
        } else {
          alert("Bottle is empty");
        }
      } else if (e.currentTarget.id === "bottle2") {
        if (bottle2[0]) {
          setActiveBall(bottle2[0]);
        } else {
          alert("Bottle is empty");
        }
      } else {
        if (emptyBottle[emptyBottle.length - 1]) {
          setActiveBall(emptyBottle[0]);
        } else {
          alert("Bottle is empty");
        }
      }
    }
  };
  console.log(
    `Current: Active ball ${activeBall.ballColor} + ${activeBall.bottleId}`
  );
  return (
    <div className="flex space-x-10   items-center h-screen w-full justify-center ">
      {/* BOTTLE 1 */}
      <div
        className="flex flex-col border-x-2 border-black p-5 border-b-2 h-40 w-20 gap-y-5 rounded-b-full cursor-pointer"
        id="bottle1"
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          BallsMovementHandler(e)
        }
      >
        {bottle1.map((ball, i) => (
          <button
            key={ball.bottleId + i}
            className={` ${ball.ballColor} border-2 rounded-full px-1 ${
              i == 0 &&
              activeBall.ballColor == ball.ballColor &&
              activeBall.bottleId == ball.bottleId
                ? "backdrop-blur-sm   -translate-y-20 duration-300 ease-in-out"
                : "duration-300 ease-in-out"
            }`}
          >
            <p className="">.</p>
          </button>
        ))}
      </div>
      {/* BOTTLE 2 */}

      <div
        className="flex flex-col border-x-2 border-black p-5 border-b-2 h-40 w-20 gap-y-5 rounded-b-full cursor-pointer"
        id="bottle2"
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          BallsMovementHandler(e)
        }
      >
        {bottle2.map((ball, i) => (
          <button
            key={ball.bottleId + i}
            className={`${ball.ballColor} ${
              i == 0 &&
              activeBall.ballColor == ball.ballColor &&
              activeBall.bottleId == ball.bottleId
                ? "backdrop-blur-sm   -translate-y-20 duration-500 ease-in-out"
                : "duration-300 ease-in-out"
            }  border-2 rounded-full px-1`}
          >
            <p className="">.</p>
          </button>
        ))}
      </div>
      {/* EMPTY BOTTLE  */}

      <div>
        <div
          className="flex flex-col border-x-2 border-black p-5 border-b-2 h-40 w-20 gap-y-5  rounded-b-full cursor-pointer"
          id="emptyBottle"
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            BallsMovementHandler(e)
          }
        >
          {emptyBottle.map((ball, i) => (
            <button
              key={ball.bottleId + i}
              className={`${ball.ballColor} border-2 rounded-full px-1 ${
                i == 0 &&
                activeBall.ballColor == ball.ballColor &&
                activeBall.bottleId == ball.bottleId
                  ? "backdrop-blur-sm   -translate-y-20 duration-500 ease-in-out"
                  : "duration-300 ease-in-out"
              }`}
            >
              <p className="">.</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BallSort;
