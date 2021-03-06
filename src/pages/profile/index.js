import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import SubTitle from '../../components/sub-title';
import profilePic from '../../images/profile.png';
import UserContext from '../../Context';

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUser(this.props.match.params.userid);
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            this.props.history.push('/error');
        }

        const user = await response.json();

        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        });
    }

    logOut = () => {
        this.context.logOut();
        this.props.history.push('/');

    }

    render() {
        const { username, posts } = this.state;

        if (!username) {
            return (
                <PageLayout>
                    <div>Loading...</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div className={styles.profile}>
                    <img src={profilePic} className={styles['profile-img']} alt='profile'/>
                    <div className={styles['personal-info']}>
                        <p className={styles.info}>
                            <span>User:</span>
                            {username}
                        </p>
                        <p className={styles.info} >
                            <span>Posts:</span>
                            {posts}
                        </p>
                    </div>
                    <button onClick={this.logOut}>Logout</button>
                    <div>
                        <SubTitle title='3 of your recent posts' />
                        <Origamis length={3} />
                    </div>
                </div>
            </PageLayout>
        )
    }
}


export default ProfilePage