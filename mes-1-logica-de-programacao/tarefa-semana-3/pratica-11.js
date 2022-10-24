let views = [121, 45, 123, 98, 56, 45, 32, 18, 10, 232, 1392824];

// ordenação criada
function ordenar(views){
    i=0
    imax=views.length;
    ib=0   
while(ib <imax ){
    while(i<imax){
        if (views[i] > views[i+1]){
            a= views[i+1];
            b= views[i];
            views[i+1]=b;
            views[i]=a;
        } 
        i++;
        }
        ib++;
        i=0;
    }
return views
}

console.log(ordenar(views))