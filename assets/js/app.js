[].forEach.call( document.querySelectorAll('[tagcloud]'), function(cloud){
    cloud.innerHTML = '<span>' + cloud.innerHTML.split(/\n/).join('</span> <span>') + '</span>';
    [].forEach.call( cloud.querySelectorAll('span'), function(elem){
    	elem.classList.add('clouditem')
        if (elem.innerHTML.replace(/^\s+|\s+$/gm,'') == 'MatahariMall') {
	        elem.style.fontSize = '400%';
	        elem.innerHTML = '<span style="color:#917666">Matahari</span><span style="color:#e30022">M</span><span style="color:#f89e17">a</span><span style="color:#2ea83a">l</span><span style="color:#0f5da8">l</span>'
        } else {
        	elem.style.fontSize = (Math.random() * 60 + 100) + '%';
        	elem.style.color = 'hsl('+ Math.random()*360 +', 30%, 50%)'
        }
    });
});
