    //create div at the end of FILES container   appendChild()
 // LOCAL file class has different border
 // div is a link to the file
 // has filename.extension of name isn't input

 function newMeetingLink(){
    // Gets string location or url input
    let linkLocation = document.getElementById('link-location').value; 
    // Get title for File
    let fileTitle = document.getElementById('link-title').value;
    
    //Create link -- EVERYTHING goes in the LINK.
    let theLink = document.createElement('a');
    theLink.setAttribute("href",linkLocation);
    theLink.setAttribute("taget",'_blank');
    
    //Creates div .Local-file-box or .URL-file-box
    let holdingBox = document.createElement("div");
    holdingBox.setAttribute('class','link-box'); 
    // Function to deal with filetypes to display image will go here.
    let fileTypeImage = 'Placeholder for now';
    holdingBox.innerHTML = fileTypeImage + ' ' + fileTitle;
    theLink.appendChild(holdingBox);

    document.getElementById('meeting-links').appendChild(theLink);
}
function processFileType(filename){
    // split('.') will split string where characters (.) are located.
    //pop(); is the reverse of shift - it takes hte LAST element out of array and returns it.
    filetype = filename.split('.')

}