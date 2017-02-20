$.fn.capitalise = function() {
    return this.each(function() {
        var $this = $(this),
            text = $this.text(),
            tokens = text.split(" ").filter(function(t) {return t != ""; }), //split text by words
            res = [],
            i,
            len,
            component;
        for (i = 0, len = tokens.length; i < len; i++) {
            component = tokens[i];
            console.log(component);
            if (component.substring(component.length - 1).match(/[a-z]/i)) { //check if the last character is an alphabet letter
                res.push(component.substring(0, component.length - 1));
                res.push(component.substring(component.length - 1).toUpperCase()); // add last capitalized letter
            }
            else {
                res.push(component.substring(0, component.length - 2));
                res.push(component.substring(component.length - 2).toUpperCase());
            }
            res.push(" "); // put space back in
        }
        $this.text(res.join(""));
    });
};

$(".myClass").capitalise();