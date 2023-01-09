import { useState } from "react";
import useSound from 'use-sound';
import { MockSurface } from "../../../mock/data/Mock";
import { MyDialogProps } from "../../presentation/MyDialog.template";


export type Surface = {
  surface1: string[],
  surface2: string[],
  surface3: string[],
  surface4: string[],
  surface5: string[],
  surface6: string[],
};

export const surface: Surface = {
  //横面
  surface1: ["red", "red", "red", "red"],
  surface2: ["green", "green", "green", "green"],
  surface3: ["orange", "orange", "orange", "orange"],
  surface4: ["blue", "blue", "blue", "blue"],
  //縦面
  surface5: ["yellow", "yellow", "yellow", "yellow"],
  surface6: ["white", "white", "white", "white"],
};

export const useSurface = () => {
  
  const [view, setView] = useState(MockSurface[0]);

  const newSurface = {
    surface1: [...view.surface1],
    surface2: [...view.surface2],
    surface3: [...view.surface3],
    surface4: [...view.surface4],
    surface5: [...view.surface5],
    surface6: [...view.surface6],
  };
  const [onSound] = useSound("/sound.wav");

  //Vertical
  function handleSurface_Vertica_Left_Back() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].slice(0, 2);
    const targetSurface5 = [...surface.surface5].slice(0, 2);
    const targetSurface3 = [...surface.surface3].slice(0, 2);
    const targetSurface6 = [...surface.surface6].slice(0, 2);
    surface.surface1.splice(0, 2, ...targetSurface6);
    surface.surface5.splice(0, 2, ...targetSurface1);
    surface.surface3.splice(0, 2, ...targetSurface5);
    surface.surface6.splice(0, 2, ...targetSurface3);
    //側面の処理(反時計回り)
    const targetSurface4 = surface.surface4;
    surface.surface4 = [targetSurface4[2], targetSurface4[0], targetSurface4[3], targetSurface4[1]];
    onSound();
    return setView(surface);
  };
  function handleSurface_Vertica_Right_Back() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].slice(2, 4);
    const targetSurface5 = [...surface.surface5].slice(2, 4);
    const targetSurface3 = [...surface.surface3].slice(2, 4);
    const targetSurface6 = [...surface.surface6].slice(2, 4);
    surface.surface1.splice(2, 2, ...targetSurface6);
    surface.surface5.splice(2, 2, ...targetSurface1);
    surface.surface3.splice(2, 2, ...targetSurface5);
    surface.surface6.splice(2, 2, ...targetSurface3);
    //側面の処理(時計回り)
    const targetSurface2 = surface.surface2;
    surface.surface2 = [targetSurface2[1], targetSurface2[3], targetSurface2[0], targetSurface2[2]];
    onSound();
    return setView(surface);
  };

  function handleSurface_Vertical_Left_Front() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].slice(0, 2);
    const targetSurface5 = [...surface.surface5].slice(0, 2);
    const targetSurface3 = [...surface.surface3].slice(0, 2);
    const targetSurface6 = [...surface.surface6].slice(0, 2);
    surface.surface1.splice(0, 2, ...targetSurface5);
    surface.surface5.splice(0, 2, ...targetSurface3);
    surface.surface3.splice(0, 2, ...targetSurface6);
    surface.surface6.splice(0, 2, ...targetSurface1);
    //側面の処理(時計回り)
    const targetSurface4 = surface.surface4;
    surface.surface4 = [targetSurface4[1], targetSurface4[3], targetSurface4[0], targetSurface4[2]];
    onSound();
    setView(surface);
  };
  function handleSurface_Vertical_Right_Front() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].slice(2, 4);
    const targetSurface5 = [...surface.surface5].slice(2, 4);
    const targetSurface3 = [...surface.surface3].slice(2, 4);
    const targetSurface6 = [...surface.surface6].slice(2, 4);
    surface.surface1.splice(2, 2, ...targetSurface5);
    surface.surface5.splice(2, 2, ...targetSurface3);
    surface.surface3.splice(2, 2, ...targetSurface6);
    surface.surface6.splice(2, 2, ...targetSurface1);
    //側面の処理(反時計回り)
    const targetSurface2 = surface.surface2;
    surface.surface2 = [targetSurface2[2], targetSurface2[0], targetSurface2[3], targetSurface2[1]];
    onSound();
    setView(surface);
  };

  //Beside
  function handleSurface_Beside_Top_Left() {
    const surface = newSurface;
    //側面の処理
    const targetSurface1 = [...surface.surface1].slice(0, 1);
    const targetSurface11 = [...surface.surface1].slice(2, 3);
    const targetSurface4 = [...surface.surface4].slice(0, 1);
    const targetSurface44 = [...surface.surface4].slice(2, 3);
    const targetSurface3 = [...surface.surface3].slice(1, 2);
    const targetSurface33 = [...surface.surface3].slice(3, 4);
    const targetSurface2 = [...surface.surface2].slice(0, 1);
    const targetSurface22 = [...surface.surface2].slice(2, 3);
  
    surface.surface1.splice(0, 1, ...targetSurface2);
    surface.surface1.splice(2, 1, ...targetSurface22);
    surface.surface4.splice(0, 1, ...targetSurface1);
    surface.surface4.splice(2, 1, ...targetSurface11);
    surface.surface3.splice(1, 1, ...targetSurface44);
    surface.surface3.splice(3, 1, ...targetSurface4);
    surface.surface2.splice(0, 1, ...targetSurface33);
    surface.surface2.splice(2, 1, ...targetSurface3);
    //縦の面の処理(時計回り)
    const targetSurface5 = surface.surface5;
    surface.surface5 = [targetSurface5[1], targetSurface5[3], targetSurface5[0], targetSurface5[2]];
    onSound();
    setView(surface);
  };
  function handleSurface_Beside_Bottom_Left() {
    const surface = newSurface;
    //側面の処理
    const targetSurface1 = [...surface.surface1].slice(1, 2);
    const targetSurface11 = [...surface.surface1].slice(3, 4);
    const targetSurface4 = [...surface.surface4].slice(1, 2);
    const targetSurface44 = [...surface.surface4].slice(3, 4);
    const targetSurface3 = [...surface.surface3].slice(0, 1);
    const targetSurface33 = [...surface.surface3].slice(2, 3);
    const targetSurface2 = [...surface.surface2].slice(1, 2);
    const targetSurface22 = [...surface.surface2].slice(3, 4);
    surface.surface1.splice(1, 1, ...targetSurface2);
    surface.surface1.splice(3, 1, ...targetSurface22);
    surface.surface4.splice(1, 1, ...targetSurface1);
    surface.surface4.splice(3, 1, ...targetSurface11);
    surface.surface3.splice(0, 1, ...targetSurface44);
    surface.surface3.splice(2, 1, ...targetSurface4);
    surface.surface2.splice(1, 1, ...targetSurface33);
    surface.surface2.splice(3, 1, ...targetSurface3);
    //縦の面の処理(反時計回り)
    const targetSurface6 = surface.surface6;
    surface.surface6 = [targetSurface6[2], targetSurface6[0], targetSurface6[3], targetSurface6[1]];
    onSound();
    setView(surface);
  };

  function handleSurface_Beside_Top_Right() {
    const surface = newSurface;
    //側面の処理
    const targetSurface1 = [...surface.surface1].slice(0, 1);
    const targetSurface11 = [...surface.surface1].slice(2, 3);
    const targetSurface4 = [...surface.surface4].slice(0, 1);
    const targetSurface44 = [...surface.surface4].slice(2, 3);
    const targetSurface3 = [...surface.surface3].slice(1, 2);
    const targetSurface33 = [...surface.surface3].slice(3, 4);
    const targetSurface2 = [...surface.surface2].slice(0, 1);
    const targetSurface22 = [...surface.surface2].slice(2, 3);
    surface.surface1.splice(0, 1, ...targetSurface4);
    surface.surface1.splice(2, 1, ...targetSurface44);
    surface.surface4.splice(0, 1, ...targetSurface33);
    surface.surface4.splice(2, 1, ...targetSurface3);
    surface.surface3.splice(1, 1, ...targetSurface22);
    surface.surface3.splice(3, 1, ...targetSurface2);
    surface.surface2.splice(0, 1, ...targetSurface1);
    surface.surface2.splice(2, 1, ...targetSurface11);
    //縦の面の処理(反時計回り)
    const targetSurface5 = surface.surface5;
    surface.surface5 = [targetSurface5[2], targetSurface5[0], targetSurface5[3], targetSurface5[1]];
    onSound();
    setView(surface);
  };
  function handleSurface_Beside_Bottom_Right() {
    const surface = newSurface;
    //側面の処理
    const targetSurface1 = [...surface.surface1].slice(1, 2);
    const targetSurface11 = [...surface.surface1].slice(3, 4);
    const targetSurface4 = [...surface.surface4].slice(1, 2);
    const targetSurface44 = [...surface.surface4].slice(3, 4);
    const targetSurface3 = [...surface.surface3].slice(0, 1);
    const targetSurface33 = [...surface.surface3].slice(2, 3);
    const targetSurface2 = [...surface.surface2].slice(1, 2);
    const targetSurface22 = [...surface.surface2].slice(3, 4);
    surface.surface1.splice(1, 1, ...targetSurface4);
    surface.surface1.splice(3, 1, ...targetSurface44);
    surface.surface4.splice(1, 1, ...targetSurface33);
    surface.surface4.splice(3, 1, ...targetSurface3);
    surface.surface3.splice(0, 1, ...targetSurface22);
    surface.surface3.splice(2, 1, ...targetSurface2);
    surface.surface2.splice(1, 1, ...targetSurface1);
    surface.surface2.splice(3, 1, ...targetSurface11);
    //縦の面の処理(時計回り)
    const targetSurface6 = surface.surface6
    surface.surface6 = [targetSurface6[1], targetSurface6[3], targetSurface6[0], targetSurface6[2]];
    onSound();
    setView(surface);
  };

  function handleDestination_left() {
    const surface = newSurface;
    const surface1 = surface.surface1;
    const surface2 = surface.surface2;
    const surface3 = surface.surface3;
    const surface4 = surface.surface4;
    const surface5 = surface.surface5;
    const surface6 = surface.surface6;

    surface.surface1 = surface2;
    surface.surface2 = [surface3[3], surface3[2], surface3[1], surface3[0]];
    surface.surface3 = [surface4[3], surface4[2], surface4[1], surface4[0]];
    surface.surface4 = surface1;
    surface.surface5 = [surface5[1], surface5[3], surface5[0], surface5[2]];
    surface.surface6 = [surface6[2], surface6[0], surface6[3], surface6[1]];

    onSound();
    setView(surface);
  };

  function handleDestination_right() {
    const surface = newSurface;
    const surface1 = surface.surface1;
    const surface2 = surface.surface2;
    const surface3 = surface.surface3;
    const surface4 = surface.surface4;
    const surface5 = surface.surface5;
    const surface6 = surface.surface6;

    surface.surface1 = surface4;
    surface.surface2 = surface1;
    surface.surface3 = [surface2[3], surface2[2], surface2[1], surface2[0]];
    surface.surface4 = [surface3[3], surface3[2], surface3[1], surface3[0]];
    surface.surface5 = [surface5[2], surface5[0], surface5[3], surface5[1]];
    surface.surface6 = [surface6[1], surface6[3], surface6[0], surface6[2]];

    onSound();
    setView(surface);
  };

  function resetSurface() {
    setView(surface);
  };

  function randomSurface() {
    const num = Math.floor(Math.random() * 3);
    console.log(num)
    setView(MockSurface[num]);
  };

  const [modalConfig, setModalConfig] = useState<MyDialogProps | undefined>();

  const handleResetClick = async() => {
    console.log("clickされました");
    const ret = await new Promise<string>((resolve) => {
      setModalConfig({
        onClose: resolve,
        title: "リセットします。よろしいですか？",
        message: "※リセットすると初期状態に戻ります。",
        approveText: "OK",
        rejectionText: "CANCEL",
      });
    }).catch(error => {
      console.error("ERROR", error);
      return null;
    });;
    setModalConfig(undefined);
    console.log(ret);
    if(ret === "ok") resetSurface();
    if(ret === "cancel") return;
  };

  const handleRandomClick = async() => {
    console.log("clickされました");
    const ret = await new Promise((resolve) => {
      setModalConfig({
        onClose: resolve,
        title: "シャッフルします。よろしいですか?",
        message: "※シャッフルすると現在の情報が失われます。",
        approveText: "OK",
        rejectionText: "CANCEL"
      });
    }).catch(error => {
      console.error("ERROR", error);
      return null;
    });
    setModalConfig(undefined);
    console.log(ret);
    if(ret === "ok") randomSurface();
    if(ret === "cancel") return;
  };

  const complete = async() => {
    const ret = await new Promise<string>((resolve) => {
      setModalConfig({
        onClose: resolve,
        title: "おめでとうございます🎉",
        approveText: "もう一度プレイする",
        isComplete: true,
      });
    }).catch(error => {
      console.error("ERROR", error);
      return null;
    });;
    setModalConfig(undefined);
    console.log(ret);
    if(ret === "ok") randomSurface();
    if(ret === "cancel") return;
  };

  return {
    view,
    handleSurface_Vertica_Left_Back,
    handleSurface_Vertica_Right_Back,
    handleSurface_Vertical_Left_Front,
    handleSurface_Vertical_Right_Front,

    handleSurface_Beside_Top_Left,
    handleSurface_Beside_Bottom_Left,
    handleSurface_Beside_Top_Right,
    handleSurface_Beside_Bottom_Right,

    handleDestination_right,
    handleDestination_left,

    modalConfig,
    randomSurface,
    handleResetClick,
    handleRandomClick,
    complete,
  };
};