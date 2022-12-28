import { useState } from "react";
import useSound from 'use-sound';

export type Surface = {
  surface1: string[],
  surface2: string[],
  surface3: string[],
  surface4: string[],
  surface5: string[],
  surface6: string[],
};

export const useSurface = () => {

  const surface: Surface = {
    //横面
    surface1: ["red", "red", "red", "red"],
    surface2: ["green", "green", "green", "green"],
    surface3: ["orange", "orange", "orange", "orange"],
    surface4: ["blue", "blue", "blue", "blue"],
    //縦面
    surface5: ["yellow", "yellow", "yellow", "yellow"],
    surface6: ["white", "white", "white", "white"],
  };
  
  const [view, setView] = useState(surface);

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
    const targetSurface1 = [...surface.surface1].splice(0, 2);
    const targetSurface5 = [...surface.surface5].splice(0, 2);
    const targetSurface3 = [...surface.surface3].splice(0, 2);
    const targetSurface6 = [...surface.surface6].splice(0, 2);
    surface.surface1.splice(0, 2, ...targetSurface6);
    surface.surface5.splice(0, 2, ...targetSurface1);
    surface.surface3.splice(0, 2, ...targetSurface5);
    surface.surface6.splice(0, 2, ...targetSurface3);
    //側面の処理(反時計回り)
    const targetSurface4 = [...surface.surface4].splice(0, 1);
    const targetSurface44 = [...surface.surface4].splice(1, 1);
    const targetSurface444 = [...surface.surface4].splice(2, 1);
    const targetSurface4444 = [...surface.surface4].splice(3, 1);
    surface.surface4.splice(0, 4, ...targetSurface444, ...targetSurface4, ...targetSurface4444, ...targetSurface44);
    onSound();
    return setView(surface);
  };
  function handleSurface_Vertica_Right_Back() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].splice(2, 2);
    const targetSurface5 = [...surface.surface5].splice(2, 2);
    const targetSurface3 = [...surface.surface3].splice(2, 2);
    const targetSurface6 = [...surface.surface6].splice(2, 2);
    surface.surface1.splice(2, 2, ...targetSurface6);
    surface.surface5.splice(2, 2, ...targetSurface1);
    surface.surface3.splice(2, 2, ...targetSurface5);
    surface.surface6.splice(2, 2, ...targetSurface3);
    //側面の処理(時計回り)
    const targetSurface2 = [...surface.surface2].splice(0, 1);
    const targetSurface22 = [...surface.surface2].splice(1, 1);
    const targetSurface222 = [...surface.surface2].splice(2, 1);
    const targetSurface2222 = [...surface.surface2].splice(3, 1);
    surface.surface2.splice(0, 4, ...targetSurface22, ...targetSurface2222, ...targetSurface2, ...targetSurface222);
    
    onSound();
    return setView(surface);
  };

  function handleSurface_Vertical_Left_Front() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].splice(0, 2);
    const targetSurface5 = [...surface.surface5].splice(0, 2);
    const targetSurface3 = [...surface.surface3].splice(0, 2);
    const targetSurface6 = [...surface.surface6].splice(0, 2);
    surface.surface1.splice(0, 2, ...targetSurface5);
    surface.surface5.splice(0, 2, ...targetSurface3);
    surface.surface3.splice(0, 2, ...targetSurface6);
    surface.surface6.splice(0, 2, ...targetSurface1);
    //側面の処理(時計回り)
    const targetSurface4 = [...surface.surface4].splice(0, 1);
    const targetSurface44 = [...surface.surface4].splice(1, 1);
    const targetSurface444 = [...surface.surface4].splice(2, 1);
    const targetSurface4444 = [...surface.surface4].splice(3, 1);
    surface.surface4.splice(0, 4, ...targetSurface44, ...targetSurface4444, ...targetSurface4, ...targetSurface444);
    onSound();
    setView(surface);
  };
  function handleSurface_Vertical_Right_Front() {
    const surface = newSurface;
    //縦の面の処理
    const targetSurface1 = [...surface.surface1].splice(2, 2);
    const targetSurface5 = [...surface.surface5].splice(2, 2);
    const targetSurface3 = [...surface.surface3].splice(2, 2);
    const targetSurface6 = [...surface.surface6].splice(2, 2);
    surface.surface1.splice(2, 2, ...targetSurface5);
    surface.surface5.splice(2, 2, ...targetSurface3);
    surface.surface3.splice(2, 2, ...targetSurface6);
    surface.surface6.splice(2, 2, ...targetSurface1);
    //側面の処理(反時計回り)
    const targetSurface2 = [...surface.surface2].splice(0, 1);
    const targetSurface22 = [...surface.surface2].splice(1, 1);
    const targetSurface222 = [...surface.surface2].splice(2, 1);
    const targetSurface2222 = [...surface.surface2].splice(3, 1);
    surface.surface2.splice(0, 4, ...targetSurface222, ...targetSurface2, ...targetSurface2222, ...targetSurface22);
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
    const targetSurface3 = [...surface.surface3].slice(0, 1);
    const targetSurface33 = [...surface.surface3].slice(2, 3);
    const targetSurface2 = [...surface.surface2].slice(0, 1);
    const targetSurface22 = [...surface.surface2].slice(2, 3);
    surface.surface1.splice(0, 1, ...targetSurface2);
    surface.surface1.splice(2, 1, ...targetSurface22);
    surface.surface4.splice(0, 1, ...targetSurface1);
    surface.surface4.splice(2, 1, ...targetSurface11);
    surface.surface3.splice(0, 1, ...targetSurface4);
    surface.surface3.splice(2, 1, ...targetSurface44);
    surface.surface2.splice(0, 1, ...targetSurface3);
    surface.surface2.splice(2, 1, ...targetSurface33);
    //縦の面の処理(時計回り)
    const targetSurface5 = [...surface.surface5].splice(0, 1);
    const targetSurface55 = [...surface.surface5].splice(1, 1);
    const targetSurface555 = [...surface.surface5].splice(2, 1);
    const targetSurface5555 = [...surface.surface5].splice(3, 1);
    surface.surface5.splice(0, 4, ...targetSurface55, ...targetSurface5555, ...targetSurface5, ...targetSurface555);
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
    const targetSurface3 = [...surface.surface3].slice(1, 2);
    const targetSurface33 = [...surface.surface3].slice(3, 4);
    const targetSurface2 = [...surface.surface2].slice(1, 2);
    const targetSurface22 = [...surface.surface2].slice(3, 4);
    surface.surface1.splice(1, 1, ...targetSurface2);
    surface.surface1.splice(3, 1, ...targetSurface22);
    surface.surface4.splice(1, 1, ...targetSurface1);
    surface.surface4.splice(3, 1, ...targetSurface11);
    surface.surface3.splice(1, 1, ...targetSurface4);
    surface.surface3.splice(3, 1, ...targetSurface44);
    surface.surface2.splice(1, 1, ...targetSurface3);
    surface.surface2.splice(3, 1, ...targetSurface33);
    //縦の面の処理(反時計回り)
    const targetSurface6 = [...surface.surface6].splice(0, 1);
    const targetSurface66 = [...surface.surface6].splice(1, 1);
    const targetSurface666 = [...surface.surface6].splice(2, 1);
    const targetSurface6666 = [...surface.surface6].splice(3, 1);
    surface.surface6.splice(0, 4, ...targetSurface666, ...targetSurface6, ...targetSurface6666, ...targetSurface66);
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
    const targetSurface3 = [...surface.surface3].slice(0, 1);
    const targetSurface33 = [...surface.surface3].slice(2, 3);
    const targetSurface2 = [...surface.surface2].slice(0, 1);
    const targetSurface22 = [...surface.surface2].slice(2, 3);
    surface.surface1.splice(0, 1, ...targetSurface4);
    surface.surface1.splice(2, 1, ...targetSurface44);
    surface.surface4.splice(0, 1, ...targetSurface3);
    surface.surface4.splice(2, 1, ...targetSurface33);
    surface.surface3.splice(0, 1, ...targetSurface2);
    surface.surface3.splice(2, 1, ...targetSurface22);
    surface.surface2.splice(0, 1, ...targetSurface1);
    surface.surface2.splice(2, 1, ...targetSurface11);
    //縦の面の処理(反時計回り)
    const targetSurface5 = [...surface.surface5].splice(0, 1);
    const targetSurface55 = [...surface.surface5].splice(1, 1);
    const targetSurface555 = [...surface.surface5].splice(2, 1);
    const targetSurface5555 = [...surface.surface5].splice(3, 1);
    surface.surface5.splice(0, 4, ...targetSurface555, ...targetSurface5, ...targetSurface5555, ...targetSurface55);
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
    const targetSurface3 = [...surface.surface3].slice(1, 2);
    const targetSurface33 = [...surface.surface3].slice(3, 4);
    const targetSurface2 = [...surface.surface2].slice(1, 2);
    const targetSurface22 = [...surface.surface2].slice(3, 4);
    surface.surface1.splice(1, 1, ...targetSurface4);
    surface.surface1.splice(3, 1, ...targetSurface44);
    surface.surface4.splice(1, 1, ...targetSurface3);
    surface.surface4.splice(3, 1, ...targetSurface33);
    surface.surface3.splice(1, 1, ...targetSurface2);
    surface.surface3.splice(3, 1, ...targetSurface22);
    surface.surface2.splice(1, 1, ...targetSurface1);
    surface.surface2.splice(3, 1, ...targetSurface11);
    //縦の面の処理(時計回り)
    const targetSurface6 = [...surface.surface6].splice(0, 1);
    const targetSurface66 = [...surface.surface6].splice(1, 1);
    const targetSurface666 = [...surface.surface6].splice(2, 1);
    const targetSurface6666 = [...surface.surface6].splice(3, 1);
    surface.surface6.splice(0, 4, ...targetSurface66, ...targetSurface6666, ...targetSurface6, ...targetSurface666);
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
    const surface5_1 = surface5[0];
    const surface5_2 = surface5[1];
    const surface5_3 = surface5[2];
    const surface5_4 = surface5[3];

    const surface6_1 = surface6[0];
    const surface6_2 = surface6[1];
    const surface6_3 = surface6[2];
    const surface6_4 = surface6[3];

    surface.surface1 = surface2;
    surface.surface2 = surface3;
    surface.surface3 = surface4;
    surface.surface4 = surface1;
    surface.surface5 = [surface5_2, surface5_4, surface5_1, surface5_3];
    surface.surface6 = [surface6_3, surface6_1, surface6_4, surface6_2];
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

    const surface5_1 = surface5[0];
    const surface5_2 = surface5[1];
    const surface5_3 = surface5[2];
    const surface5_4 = surface5[3];

    const surface6_1 = surface6[0];
    const surface6_2 = surface6[1];
    const surface6_3 = surface6[2];
    const surface6_4 = surface6[3];

    surface.surface1 = surface4;
    surface.surface2 = surface1;
    surface.surface3 = surface2;
    surface.surface4 = surface3;
    surface.surface5 = [surface5_3, surface5_1, surface5_4, surface5_2];
    surface.surface6 = [surface6_2, surface6_4, surface6_1, surface6_3];
    onSound();
    setView(surface);
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
  };
};