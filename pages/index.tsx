import * as fabric from "fabric";
import { FabricImage, Group, Textbox } from "fabric";
import { NextPage } from "next";
import { useCallback } from "react";
import { Canvas } from "../components/Canvas";

const IndexPage: NextPage = () => {
  const onLoad = useCallback(async (canvas: fabric.Canvas) => {
    canvas.backgroundColor = "black";
    canvas.setDimensions({
      width: window.innerWidth,
      height: 1024,
    });

    const sceneGroup = new Group();
    canvas.add(sceneGroup);

    const group1 = new Group();
    sceneGroup.add(group1);
    group1.setRelativeX(0);
    group1.setRelativeY(0);
    const image1 = await FabricImage.fromURL("/ffred-test.jpg");
    image1.set({ left: 0, top: 0, width: 2000, height: 50 });
    addText(group1, "m1 10", 1010, -75);
    group1.add(image1);

    const group2 = new Group();
    sceneGroup.add(group2);
    group2.setRelativeX(1500);
    group2.setRelativeY(50);
    const image2 = await FabricImage.fromURL("/ffblue-test.jpg");
    image2.set({ left: 0, top: 0, width: 2000, height: 50 });
    addText(group2, "m4 20", 500, 75);
    group2.add(image2);

    //canvas.centerObject(sceneGroup);
    canvas.renderAll();
  }, []);

  return (
    <div className="position-relative">
      <Canvas onLoad={onLoad} />
    </div>
  );
};

function addText(group: Group, name: string, x: number, y: number): Textbox {
  const text = new Textbox(name, {
    left: 0,
    top: 0,
    width: 200,
    fontSize: 20,
    backgroundColor: "transparent",
    fill: "#ffffff",
    textAlign: "center",
  });
  group.add(text);
  text.setRelativeX(x - text.width / 2);
  text.setRelativeY(y);
  return text;
}

export default IndexPage;
