

//if ( troco > 0.10 || troco < 10){
    function   FuncTroco (vlCompra, ntCliente) { 
        return parseFloat( ((vlCompra - ntCliente) * - 1).toFixed(2) ) 
    }
    
    function superTroco(t) {
        if ( t >=  0.10 && t <= 10.00  ){
            return true
        }
        return false
    }
    
    function gerarSuperTroco(t){
        const val = []
        if( t < 2 ){
            val[0] = 0
            val[1] = t - 0
             
        }else if (t > 2 && t < 5) {
            val[0] = 2
            val[1] = t - 2
        } else if ( t > 5 && t < 10){
            val[0] = 5
            val[1] = t - 5
        }
        return val
        /*t =  t.toString()
        return  t.split(".")*/
    }
    
    module.exports = { FuncTroco, superTroco, gerarSuperTroco }