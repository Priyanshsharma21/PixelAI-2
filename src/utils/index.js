import FileSaver from "file-saver"

export const downloadImage = async(photo)=>{
    FileSaver.saveAs(photo, `image.jpg`)
}