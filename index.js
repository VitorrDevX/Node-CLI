#!/usr/bin/env node

const fs = require("fs");
const codigo = `
//! REACT
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//! IMPORTS

//? CÓDIGO
export default function Nome() {
  return (
    <>
    
    </>
  );
}

//? ESTILOS
const styles = StyleSheet.create({

});
`


let args = process.argv[2]

if (args) {
    args = args.replace("--", "");
    generateComponent(args)
}

function generateComponent(name) {
    const dirfiles = __dirname + '/components/';

    if (!fs.existsSync(dirfiles)) {
        fs.mkdir(dirfiles, { recursive: true }, (err) => {
            if (err) throw err;
            console.log(`[✅] Pasta ${dirfiles} criada com sucesso!`);
        });

        fs.writeFile(dirfiles + name + '.js', codigo, function (err) {
            if (err) throw err;
            console.log(`[✅] Componente ${name}.js criado com sucesso!`);
        });
    } else {
        if (fs.existsSync(dirfiles + name + '.js')) return
        fs.writeFile(dirfiles + name + '.js', codigo, function (err) {
            if (err) throw err;
            console.log(`[✅] Componente ${name}.js criado com sucesso!`);
        });
    }
}
