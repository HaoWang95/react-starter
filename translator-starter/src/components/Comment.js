import React from 'react';
import Faker from 'faker'


function Comment() {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author={Faker.name.findName()}
                    authorImage={Faker.image.image()}
                    postDate={new Date(Faker.time.recent()).toUTCString()}
                    post={Faker.lorem.sentence()}
                />
            </ApprovalCard>

            <CommentDetail
                author={Faker.name.findName()}
                authorImage={Faker.image.image()}
                postDate={new Date(Faker.time.recent()).toUTCString()}
                post={Faker.lorem.sentence()}
            />
            <CommentDetail
                author={Faker.name.findName()}
                authorImage={Faker.image.image()}
                postDate={new Date(Faker.time.recent()).toUTCString()}
                post={Faker.lorem.sentence()}
            />
        </div>
    );
}

class CommentDetail extends React.Component {
    render() {
        return (
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt='avatar' src={this.props.authorImage} />
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        {this.props.author}
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            {this.props.postDate}
                        </span>
                    </div>
                    <div className='post'>
                        <p>{this.props.post}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class ApprovalCard extends React.Component {
    render() {
        return (
            <div className='ui card'>
                <div className='content'>
                    {this.props.children}
                </div>
                <div className='extra content'>
                    <div className='ui two buttons'>
                        <div className='ui basic green button'>Approve</div>
                        <div className='ui basic red button'>Reject</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Comment