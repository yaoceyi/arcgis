var vertices=[[0,1],[1,1],[1,0],[0,0]];
var testx=1;
var testy=2;
function pnpoly(vertices,testx,testy){
	var c=false;
	for(var i=0,j=vertices.length-1;i<vertices.length;j=i++)
	{
		if(((vertices[i][1]>testy)!=(vertices[j][1])>testy)&&
			(testx<(vertices[j][0]-vertices[i][0])*(testy-vertices[i][1])/(vertices[j][1]-vertices[i][1])+vertices[i][0]))
			c=!c;
	}
	return c;
}
console.log(pnpoly(vertices,testx,testy));
// int pnpoly(int nvert, float *vertx, float *verty, float testx, float testy)
// {
//   int i, j, c = 0;
//   for (i = 0, j = nvert-1; i < nvert; j = i++) {
//     if ( ((verty[i]>testy) != (verty[j]>testy)) &&
//      (testx < (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
//        c = !c;
//   }
//   return c;
// }