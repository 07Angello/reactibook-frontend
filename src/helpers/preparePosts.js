import moment from 'moment';

export const preparePosts = ( posts = [] ) => {

    return posts
        .map( ( post ) => ({
            ...post,
            createdAt: moment( post.createdAt ).toDate(),
            updatedAt: moment( post.updatedAt ).toDate()
        }) );

}
