class form extends component{

    values(){
        return {
            name: "marc",
            car: "toyota"
        }
    }

    depict(){
        return [
           { "is" : "layout", "orientation": enums.VERTICAL , "with": [
                {"is": "text", "value":"hello, I'm {name}, and I drive a {car}"}
           ]}
       ]
    }

    onStart(){
        this.value.name = "apples"


    }
    
    press(button){
        print(button.value)
    }
    

}


new form();
