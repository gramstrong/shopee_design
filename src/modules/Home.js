/*global $*/
import React from 'react';
import Footer from './Footer';
// import P5Wrapper from 'react-p5-wrapper';
import { Link } from 'react-router';
// import sketch from '../sketches/sketch';
import Search from './Search';

var searchList = []
var menuName = ''
var menu = ''
var root = ''

const apiUrl = 'https://api.rss2json.com/v1/api.json'

for (var i = 0; i < 4; i++) {
	if (i === 0) {
		menuName = 'Seller Center Guideline';
		menu = require('../sc-guideline-menu.json');
		root = '/product/sc-guideline/';
	} else if (i === 1) {
		menuName = 'PC Mall Guideline';
		menu = require('../pcmall-guideline-menu.json');
		root = '/product/pcmall-guideline/';
	} else if (i === 2) {
		menuName = 'APP Guideline';
		menu = require('../app-guideline-menu.json');
		root = '/product/app-guideline/';
	} else {
		menuName = 'Branding';
		menu = require('../branding-menu.json');
		root = '/branding/';
	}
	for (var submenu in menu) {
		for (var item in menu[submenu]) {
			searchList.push({
				name: menu[submenu][item],
				route: root + makeAddr(menu[submenu][item]),
				menu: menuName,
				key: menuName + menu[submenu][item],
				match: -1,
			})
		};
	}
}

function makeAddr(title) {
	var addr = title.toLowerCase().replace(/ /g, '-');
	return addr;
}

function queryParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function prepareMediumPost ({link, description, author, title, }){
	const tagIndex = description.indexOf('<img');
	const srcIndex = description.substring(tagIndex).indexOf('src=') + tagIndex;
	const srcStart = srcIndex + 5;
	const srcEnd = description.substring(srcStart).indexOf('"') + srcStart;
	const img = description.substring(srcStart, srcEnd);

	var yourString = description.replace(/<figure[^>]*>/g, "");
	yourString = yourString.replace(/<img[^>]*>/g, "");
	yourString = yourString.replace(/<hr>/g, "");
	yourString = yourString.replace(/<strong[^>]*>/g, "");
	yourString = yourString.replace(/<\/?a[^>]*>/g, "");
	yourString = yourString.replace(/<strong[^>]*>/g, "");
	yourString = yourString.replace(/<h[^>]*>/g, "");
	yourString = yourString.replace(/<p[^>]*>/g, "");

	var maxLength = 80;
	if (yourString.indexOf('</p>') < maxLength) {
		var trimmedString = yourString.substr(0, yourString.indexOf('</p>'));
	} else {
		trimmedString = yourString.substr(0, maxLength) + '...';
	}
	return {
		link,
		img,
		title,
		description: trimmedString,
		author
	}
}

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			mediumPosts: {
				items: [],
				isFetching: false,
				error: null
			}
		}
	}
	updateMediumPostsState = newState => {
		this.setState((prevState) => ({
			mediumPosts: Object.assign(
				{},
				prevState.mediumPosts,
				newState
			)
		}))
	}
	
	fetchMediumPosts = () => {
		var data = {
			rss_url: 'https://medium.com/feed/shopee',
			api_key: '2xozxhcwffkcirqd0s499i5odcbcfgo6ctzywvtm',
			count: 3,
			order_by:'pubDate'
		};
		this.updateMediumPostsState({isFetching: true});
		fetch(`${apiUrl}?${queryParams(data)}`)
			.then((response) => response.json())
			.then((response) => {
				console.log(response)
				if(response.status !== 'ok'){
					throw new Error("Server response is not ok");
				}
				const preparedItems = response.items.map(prepareMediumPost)
				this.updateMediumPostsState({
					isFetching: false,
					items: preparedItems
				});
			})
			.catch((error) => {
				console.error(error);
				this.updateMediumPostsState({
					isFetching: false,
					error
				});
			})
	}
	componentDidMount() {
		this.fetchMediumPosts();
	}
	renderMediumPostItem = ({link, img, title, description, author}, key) => {
		return (
			<div key={key} className="col-md-4">
				<a className="card" href={link} target="_blank">
					<div className="crop">
						<img src={img} />
					</div>
					<h3 className="title">{title}</h3>
					<p className="desc">
						{description}
					</p>
					<p className="author">{author}</p>
				</a>
			</div>
		)
	}
	render() {
		const { mediumPosts } = this.state;
		return (
			<main className="home">
				<div className="search">
					<div className='container'>
						<div className="row">
							<div className="col-md-7">
								<h3 className="header">
									<span className="brandname">Shopee Design </span>
									exists to enhance<br /> user experience & work efficiency
								</h3>

								<div className='search-input'>
									<Search data={searchList} />
								</div>
							</div>
						</div>
					</div>
					<hr/>
				</div>

				<div className="main-branding">
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<Link className="branding-card" to="/branding/logo">
									<img src="/static/image/icon-visual-resource.svg" alt="Visual Resource icon" />
									<h3>Visual Resource</h3>
									<p>This resource is intended to standardize the use of the Shopee brand and ensure the brand's integrity and consistency.</p>
								</Link>
							</div>
							<div className="col-sm-4">
								<Link className="branding-card" to="/branding/banner">
									<img src="/static/image/icon-guideline.svg" alt="Guideline icon" />
									<h3>Guideline</h3>
									<p>You can find Shopee branding guideline here, please follow the principles to maintain Shopee brand image.</p>
								</Link>
							</div>
							<div className="col-sm-4">
								<Link className="branding-card" to="/branding/core-value">
									<img src="/static/image/icon-brand-book.svg" alt="Brand Book icon" />
									<h3>Brand Book</h3>
									<p>The book hightlights key components important to the Shopee brand: our purpose, our positioning and our personality.</p>
								</Link>
							</div>
						</div>
					</div>
					<hr/>
				</div>
				<div className="medium">
					<div className="container">
						<div className="title">Articles</div>
						{
							mediumPosts.isFetching ? 
								(
									<div className="col-xs-12">Loading Medium content...</div>
								) : (
									<div id="content">
										{mediumPosts.items.map(this.renderMediumPostItem)}
									</div>
								)
						}
						{
							mediumPosts.error ? (
								<div className="col-xs-12">
									<div className="alert alert-danger">{mediumPosts.error.message}</div>
								</div>
							) : null
						}
					</div>
				</div>
				<div className="team"></div>
				<div className="container">
					<h3 className="title">Team</h3>
					<div className="col-md-12">
						<img src="/static/image/team_member.png" alt="Shopee Design Team Member" className="team-pic" />
					</div>
				</div>
				<Footer />
			</main >
		);
	}
}