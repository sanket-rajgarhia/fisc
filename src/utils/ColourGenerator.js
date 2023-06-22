import ShadeGenerator from "shade-generator";
import randomColor from "randomcolor";

export const colorGenerator = (requiredNoOfColors) => {
    let colors = ["#3F51B5","#008FFB","#4CAF50", "#F9CE1D", "#F6A61C", "#D4526E", "#775DD0"];
    let requiredNo = colors.length;
    while(requiredNo <= requiredNoOfColors){
        colors = [...colors, randomColor()];
    }
    colors = colors.map(color => ShadeGenerator.hue(color).shade("100").hex());
    return colors;
}