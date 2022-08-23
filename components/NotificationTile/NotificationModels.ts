import { User } from '../../models/Entities' 

export class NtfType {
    static get COMMENT () {return "comment";}
    static get LIKED () { return "liked"; }
    static get SAVED () { return "saved"; }
    static get INFO () { return "info"; }
}

export interface NtfEntity {
    type: string;
    content: CommentObject | LikedObject | SavedObject| InfoObject ,
}

export interface CommentObject{
    user: User,
    comment: string,
    feedInfo : FeedInfo,
    time: number,
    postPreview: { leadingImage: string, description: string } | null,
}

export interface LikedObject{
    users: User[],
    otherCount: number,
    feedInfo : FeedInfo ,
    time: number,
}
export interface SavedObject{
    user: User,
    feedInfo : FeedInfo ,
    time: number,
}

export interface InfoObject{
    leadingImage: string, 
    info: string,
    feedInfo : FeedInfo,
    time: number,

}

export interface NtfCollection {
    today: NtfEntity[],
    yesterday: NtfEntity[],
    thisWeek: NtfEntity[],
}

export interface FeedInfo{
    category: string,
    image: string|null,
    feedUrl: string
}

export const notifications: NtfCollection = {
    today:[
        {
            type:NtfType.LIKED,
            content:<LikedObject>{
                users: [
                    { 
                        profileUrl:'http://',
                        imageUrl:'/assets/images/userLogo2.png',
                        name:'Arsh Saiyad'
                    },
                    { 
                        profileUrl:'',
                        imageUrl:'/assets/images/userLogo1.png',
                        name:'Manan Katiyar',
                    }
                ],
                otherCount: 26,
                feedInfo:{
                    category: 'technology',
                    image:'/assets/images/postPreviewImage1.png',
                    feedUrl:'http://',
                },
                time: 12345
            },
        },
        {
            type:NtfType.COMMENT,
            content:<CommentObject>{
                user: { 
                    profileUrl:'http://',
                    imageUrl:'/assets/images/userLogo2.png',
                    name:'Arsh Saiyad'
                },
                comment:'Quite Insightful!!',
                feedInfo:{
                    category: 'technology',
                    image:'/assets/images/postPreviewImage1.png',
                    feedUrl:'http://',
                },
                postPreview:null,
                time: 12345
            },
        }
    ],
    yesterday:[
        {
            type:NtfType.COMMENT,
            content:<CommentObject>{
                user: { 
                    profileUrl:'http://',
                    imageUrl:'/assets/images/userLogo2.png',
                    name:'Arsh Saiyad'
                },
                comment:'But the discovered methods haven’t  implemented on such a ...',
                feedInfo:{
                    category: 'technology',
                    image:null,
                    feedUrl:'http://',
                },
                postPreview:{ leadingImage: '/assets/images/postPreviewImage2.png',
                     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum ligula, maximus sit amet volutpat in, dignissim eu felis. In hac habitasse platea dictumst. Cras in nunc justo. Sed fermentum consectetur laoreet. Vestibulum ac justo eget dolor pharetra sagittis eget ut risus. Ut rhoncus ligula.'
                    },
                time: 12345
            },
        }
   
    ],
    thisWeek:[
        {
            type:NtfType.SAVED,
            content:<SavedObject>{
                user: { 
                        profileUrl:'http://',
                        imageUrl:'/assets/images/notifPersonRounded.png',
                        name:''
                    },
                feedInfo:{
                    category: 'Technology',
                    image: '/assets/images/postPreviewImage3.png',
                    feedUrl:'http://',
                },
                time: 12345
            },
        },

        {
            type:NtfType.INFO,
            content:<InfoObject>{
                leadingImage: '/assets/images/notifImageWarning.png',
                info:'You have receiver a Level 1 warning for you activity in Technology',
                feedInfo:{
                    category: 'Technology',
                    image:'/assets/images/postPreviewImage3.png',
                    feedUrl:'http://',
                },
                time: 12345
            },
        }
      
    ]
   }