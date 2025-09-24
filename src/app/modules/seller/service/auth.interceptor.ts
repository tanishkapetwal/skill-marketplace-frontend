import { HttpInterceptorFn } from "@angular/common/http";
export const sellerAuthInterceptor: HttpInterceptorFn=(req,next)=>{
    const token =localStorage.getItem('token');
    //debugger
    console.log(token)     // testing
    if(req.url.includes('/login')||req.url.includes('/signup')){
        return next(req);
    }
    if(token){
        const cloned= req.clone({
            setHeaders:{
                Authorization:`Bearer ${token}`
            }
        });
        console.log(req)
        return next(cloned);
    }
    return next(req);
};