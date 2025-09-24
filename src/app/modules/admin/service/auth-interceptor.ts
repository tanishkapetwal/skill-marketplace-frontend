import { HttpInterceptorFn } from "@angular/common/http";
export const adminAuthInterceptor: HttpInterceptorFn=(req,next)=>{
    const token =localStorage.getItem('token');
    //debugger
    console.log(token)     // testing
    if(req.url.includes('/login')||req.url.includes('/add-admin')){
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