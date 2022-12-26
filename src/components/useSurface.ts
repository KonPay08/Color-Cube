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
  
  // const surface: Surface = {
  //   //横面
  //   surface1: ["red1", "red2", "red3", "red4"],
  //   surface2: ["green1", "green2", "green3", "green4"],
  //   surface3: ["orange1", "orange2", "orange3", "orange4"],
  //   surface4: ["blue1", "blue2", "blue3", "blue4"],
  //   //縦面
  //   surface5: ["yellow1", "yellow2", "yellow3", "yellow4"],
  //   surface6: ["white1", "white2", "white3", "white4"],
  // };

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
    const targetSurface1 = [...surface.surface1].splice(0, 2);
    const targetSurface5 = [...surface.surface5].splice(0, 2);
    const targetSurface3 = [...surface.surface3].splice(0, 2);
    const targetSurface6 = [...surface.surface6].splice(0, 2);
    surface.surface1.splice(0, 2, ...targetSurface6);
    surface.surface5.splice(0, 2, ...targetSurface1);
    surface.surface3.splice(0, 2, ...targetSurface5);
    surface.surface6.splice(0, 2, ...targetSurface3);
    onSound();
    return setView(surface);
  };
  function handleSurface_Vertica_Right_Back() {
    const surface = newSurface;
    const targetSurface1 = [...surface.surface1].splice(2, 2);
    const targetSurface5 = [...surface.surface5].splice(2, 2);
    const targetSurface3 = [...surface.surface3].splice(2, 2);
    const targetSurface6 = [...surface.surface6].splice(2, 2);
    surface.surface1.splice(2, 2, ...targetSurface6);
    surface.surface5.splice(2, 2, ...targetSurface1);
    surface.surface3.splice(2, 2, ...targetSurface5);
    surface.surface6.splice(2, 2, ...targetSurface3);
    onSound();
    return setView(surface);
  };

  function handleSurface_Vertical_Left_Front() {
    const surface = newSurface;
    const targetSurface1 = [...surface.surface1].splice(0, 2);
    const targetSurface5 = [...surface.surface5].splice(0, 2);
    const targetSurface3 = [...surface.surface3].splice(0, 2);
    const targetSurface6 = [...surface.surface6].splice(0, 2);
    surface.surface1.splice(0, 2, ...targetSurface5);
    surface.surface5.splice(0, 2, ...targetSurface3);
    surface.surface3.splice(0, 2, ...targetSurface6);
    surface.surface6.splice(0, 2, ...targetSurface1);
    onSound();
    setView(surface);
  };
  function handleSurface_Vertical_Right_Front() {
    const surface = newSurface;
    const targetSurface1 = [...surface.surface1].splice(2, 2);
    const targetSurface5 = [...surface.surface5].splice(2, 2);
    const targetSurface3 = [...surface.surface3].splice(2, 2);
    const targetSurface6 = [...surface.surface6].splice(2, 2);
    surface.surface1.splice(2, 2, ...targetSurface5);
    surface.surface5.splice(2, 2, ...targetSurface3);
    surface.surface3.splice(2, 2, ...targetSurface6);
    surface.surface6.splice(2, 2, ...targetSurface1);
    onSound();
    setView(surface);
  };

  //Beside
  function handleSurface_Beside_Top_Left() {
    const surface = newSurface;
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
    onSound();
    setView(surface);
  };
  function handleSurface_Beside_Bottom_Left() {
    const surface = newSurface;
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
    onSound();
    setView(surface);
  };

  function handleSurface_Beside_Top_Right() {
    const surface = newSurface;
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
    onSound();
    setView(surface);
  };
  function handleSurface_Beside_Bottom_Right() {
    const surface = newSurface;
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
  };
};