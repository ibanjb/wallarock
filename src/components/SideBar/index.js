import React from "react";
import { Image } from "react-native";
import { Content,	Text, List,	ListItem,	Icon,	Container,	Left,	Right,	Badge,	Button,	View,	StyleProvider,	getTheme,	variables } from "native-base";
import styles from "./style";

const datas = [
	{
		name: "Subir producto",
		route: "Anatomy",
		bg: "#C5F442",
	},
	{
		name: "Mensajes",
		route: "Actionsheet",
		bg: "#C5F442",
	},
	{
		name: "rockplay",
		route: "Header",
		bg: "#477EEA",
	},
	{
		name: "Magazine",
		route: "Footer",
		bg: "#DA4437",
		types: "3",
	},
	{
		name: "Colecciones",
		route: "NHBadge",
		bg: "#4DCAE0",
	},
	{
		name: "Invita a tus amigos",
		route: "NHButton",
		bg: "#1EBC7C",
	},
	{
		name: "Ayuda",
		route: "NHCard",
		bg: "#B89EF5",

	},
];

const drawerCover = require("../../../images/stars.jpg");

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,			
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge>
											<Text style={styles.badgeText}>{`${data.types}`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}
