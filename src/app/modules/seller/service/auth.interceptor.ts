import { HttpInterceptorFn } from "@angular/common/http";
export const sellerAuthInterceptor: HttpInterceptorFn=(req,next)=>{
    const accessToken =localStorage.getItem('accessToken');
    //debugger
    console.log(accessToken)     // testing
    if(req.url.includes('/login')||req.url.includes('/signup')){
        return next(req);
    }
    if(accessToken){
        const cloned= req.clone({
            setHeaders:{
                Authorization:`Bearer ${accessToken}`
            }
        });
        console.log(req)
        return next(cloned);
    }
    return next(req);
};