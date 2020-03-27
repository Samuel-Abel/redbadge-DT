export interface googleResponse {
    html_attributions: any,
    next_page_token: string,
    results: Array<googleResponse>
}

export interface googleResults{
    results: any;
    formatted_address: string,
    geometry: any,
    icon: string,
    id: string,
    name: string,
    openinng_hours: boolean,
    photos: any,
    types: any,
    rating: number
}
    