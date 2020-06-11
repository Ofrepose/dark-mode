import React,{useState, useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = ()=>{
    const [mode,setMode] = useLocalStorage('dark',false)

    useEffect(()=>{
        mode ? document.body.classList.remove("dark-mode") : document.body.classList.add("dark-mode");
    },[mode]);

    return [mode,setMode];
}