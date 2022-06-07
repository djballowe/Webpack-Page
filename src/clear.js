function clearPage() {
    
    let num = document.getElementById('content').childElementCount;
    console.log(num);
    const content = document.getElementById('content');
    
    for (let i = 0; i < num; i++) {
        let child = content.lastElementChild;
        while (child) {
            content.removeChild(child);
            child = content.lastElementChild;
        }
    }
}

export { clearPage };