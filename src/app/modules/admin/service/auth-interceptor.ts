import { HttpInterceptorFn } from "@angular/common/http";
export const adminAuthInterceptor: HttpInterceptorFn=(req,next)=>{
    const accessToken =localStorage.getItem('accessToken');
    //debugger
    console.log(accessToken)     // testing
    if(req.url.includes('/login')||req.url.includes('/add-admin')){
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