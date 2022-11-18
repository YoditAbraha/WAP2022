/**
 * self-pattern.js
 */

 var a = {
    name: "",
    log: function() {
      this.name = "Hello";
      console.log(this.name); //Hello
      var setFrench = function(newname) {
        this.name = newname;
      };
      setFrench("Bonjour");
      console.log(this.name); // prints Hello. Why?
    }
  };
  
  a.log();