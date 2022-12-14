import { Networks } from "./blockchain";

const BSC_MAINNET = {
    SAFUU_ADDRESS : "0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90",
    FIREPIT_ADDRESS : "0xaA32C984AfDfa6B95e88B8aB7faBfa65De89b98C",
    TREASURY_ADDRESS : "0xa9c6d0cc785569b450393A69599E97fAED5D9dd9",
    SIF_ADDRESS : "0x082D0FbCA3D80b2d4A05E20bFc227523bE8EFEF3",
    PAIR_ADDRESS : "0xf5D9b8947b11DdF5eE33374cC2865E775EBE00Dc",
    BUSD_ADDRESS : "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    ROUTER_ADDRESS : "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    WBNB_ADDRESS : "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.BSC) return BSC_MAINNET;
    throw Error("Network don't support");
};


