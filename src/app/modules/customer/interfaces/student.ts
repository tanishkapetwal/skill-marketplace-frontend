export interface student{
id:number
userEmail:string
userName:string
userPhone:string
}
export interface skillList {
  avgRating: number
  description: string
  id: number
  price: number
  sellerUserName: string
  skillsCategory: string
  skillsDescription: string
  skillsName: string
  time: number
  title: string
}
export interface notifications{
  orderId: number,
  message: string

}

export interface Order {
    appointmentEnd: string, appointmentStart: string,
    id: number, orderDate: string, orderRating: number, skillsListingId: number,
    skillsListingSellerUserName: string, skillsListingTitle: string, status: string
}
export interface PaginatedOrders {
    content: Order[],
    totalElements: number,
    totalPages: number,
    page: number,
    size: number
}
