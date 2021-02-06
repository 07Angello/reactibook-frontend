
export const preparePosts = ( posts = [] ) => {

    return posts
        .map( ( post ) => ({
            ...post
        }) );

}
