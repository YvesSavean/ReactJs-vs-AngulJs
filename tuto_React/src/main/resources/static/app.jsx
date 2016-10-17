define(function (require) {
	'use strict';

	// tag::vars[]
	var React = require('react');
	var ReactDom = require('reactDom');
	var client = require('./client');
	// end::vars[]

	// tag::app[]
	var App = React.createClass({getInitialState: function () {
			return ({citys: []});
		},
		componentDidMount: function () {
			client({method: 'GET', path: '/city/getCity'}).done(response => {
				this.setState({citys: response.entity});
			});
		},
		render: function () {
			return (
				<CitysList citys={this.state.citys}/>
			)
		}
	})
	// end::app[]
	
	//tag::city-list[]
	var CitysList = React.createClass({
		render: function () {
			var citys = this.props.citys.map(city =>
				<City key={city.city_id} city={city}/>
			);
			return (
				<table>
						<tr>
							<th>city_id</th>
							<th>city</th>
							<th>country_id</th>
							<th>last_update</th>
						</tr>
					<tbody>
						{citys}
					</tbody>
				</table>
			)
		}
	})
	// end::city-list[]
	
	
	// tag::city[]
	var City = React.createClass({
		render: function () {
			return (
				<tr>
					<td>{this.props.city.city_id}</td>
					<td>{this.props.city.city}</td>
					<td>{this.props.city.country_id}</td>
					<td>{this.props.city.last_update}</td>
				</tr>
			)
		}
	})
	// end::city[]

	// tag::render[]
	ReactDom.render(<App />,document.getElementById('content')
	)
	// end::render[]
	
});