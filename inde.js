let a = {
    name: 'lin',
    c:function() {
        return function() {
              return {
                name:this.name
            }
        }
    }
}


a.c()