<template>
	<q-card :class="$q.dark.isActive?'':'bg-blue-grey-1 text-black'" style="max-width: 100vw;">
		<q-bar class="bg-primary text-white">
			<q-space />
			<div class="text-weight-bold">{{selectiontype}} Selection Table</div>
			<q-space />
			<q-btn dense flat icon="close" v-close-popup>
				<q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
			</q-btn>
		</q-bar>

		<q-card-section>
			<!-- <q-form @submit="parentCallback([{id:customName}])" class="q-gutter-md" >
				<q-input bottom-slots v-model="customName" label="Custom Name (robot type: example 'parser1')" counter dense>
					<template v-slot:before>
						<q-btn color="primary" type="submit" label="validate" v-close-popup/>
					</template>
				</q-input>
			</q-form> -->
			<q-table
				ref="usersTable"
				class="dark rounded-borders"
				title="Users"
				:data="table.data"
				:columns="table.fields"
				row-key="username"
				:pagination.sync="table.pagination"
				:loading="table.loading"
				loading-label="loading"
				:filter="table.filter"
				binary-state-sort
				:visible-columns="table.visibleColumns"
				:selection="singlemultiple"
				:selected.sync="table.selected"
				dense
				table-header-class="text-primary"
				card-class="shadow-8"
				style="height: 80vh; width:90vw"
				virtual-scroll
				table-style="max-height:80vh"
				:rows-per-page-options="[0]"
				>
<!-- selection="single" -->
				<template v-slot:top="props">
					<q-btn-group flat >
						<q-btn no-caps  push color="primary" label="validate" :disabled="table.selected.length <1" @click="parentCallback(table.selected)" v-close-popup>
							<q-tooltip :delay="300" content-class="text-white bg-primary">Validate the selection</q-tooltip>
						</q-btn>
					</q-btn-group>

					<q-space />

					<q-input  dense debounce="300" v-model="table.filter" placeholder="Search" text-color="blue-grey-8" >
						<template v-slot:append>
							<q-icon name="search" />
						</template>
						<q-tooltip :delay="300" content-class="bg-white text-primary">Search a user</q-tooltip>
					</q-input>
					
					<q-space />

					<q-select v-model="table.visibleColumns" multiple borderless dense options-dense :display-value="$q.lang.table.columns"
					emit-value map-options  :options="filterFields(table)" option-value="name" style="min-width: 100px" >
						<q-tooltip :delay="300" content-class="bg-white text-primary">Select visible columns</q-tooltip>
					</q-select>

					<q-btn flat round dense text-color="blue-grey-8" :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"  @click="props.toggleFullscreen"  class="q-ml-md" />
				</template>

				<template v-slot:body="props">
					
					<q-tr :props="props">
						<q-td auto-width><q-toggle dense v-model="props.selected" /></q-td>
						<q-td key="picture_url" :props="props"><q-avatar size="24px"><img :src="props.row.picture_url" /></q-avatar></q-td>
						<q-td key="name" :props="props">{{props.row.username}}</q-td>
						<q-td key="email" :props="props">{{ props.row.id }}</q-td>
						<q-td key="super_admin" :props="props">{{ props.row.super_admin }}</q-td>
						<q-td key="last_seen" :props="props">{{ props.row.last_seen }}</q-td>
					</q-tr>
					
				</template>

			</q-table>
		</q-card-section>
	</q-card>
</template>

<script>
import api from '../boot/backend-api';

export default {
	props: ['parentCallback', 'general', 'projectname', 'robot', 'selectiontype', 'singlemultiple', 'preselected'],
	data(){
		return {
			table:{
				data: [],
				fields: [
					// { name: 'selection', label: 'selection', field: 'selection' },
					{ name: 'picture_url', label: 'Avatar', field: 'picture_url' },
					{ name: 'name', label: 'Name', field:'username', sortable: true },
					{ name: 'email', label: 'Mail or ID', field: 'id', sortable: true },
					{ name: 'super_admin', label: 'Admin', field: 'super_admin', sortable: true },
					{ name: 'last_seen', label: 'Last Seen', field: 'last_seen', sortable: true}
				],
				visibleColumns: ['picture_url', 'name', 'email' ],
				filter: '',
				selected: [],
				loading: false,
				pagination: { sortBy: 'name', descending: false, page: 1, rowsPerPage: 10 },
				loadingDelete: false
			}
		}
	},
	mounted(){
		if(this.$props.general){this.getUsers();}
		else{ this.getUsersTreeFrom(); }
		
	},
	methods: {
		/**
		 * Filter the fields (visible columns) given the table in json format
		 * 
		 * @param {Object} tableJson
		 * @returns {Array} array of fields
		 */
		filterFields(tableJson) {
			var tempArray = tableJson.fields.filter(function( obj ) { return obj.field !== 'syntInfo' && obj.field !== 'cat' && obj.field !== 'redistributions' ; });
			return tempArray;
		},
		/**
		 * Retrieve users from backend and populate the table data
		 * 
		 * @returns void
		 */
		getUsers(){ 
			api.getUsers()
				.then( response => {
					this.table.data = response.data; 
					this.table.selected = this.table.data.filter(u => this.preselected.includes(u.id))
					})
				.catch(error => { this.$store.dispatch("notifyError", {error: error}); }); 
		},
		/**
		 * Retrived the source of trees and populate the table data
		 * 
		 * @returns void
		 */
		getUsersTreeFrom(){ 
			api.getUsersTreeFrom(this.$props.projectname)
			.then( response => { 
				this.table.data = response.data;
			})
			.catch(error => { 
				this.$store.dispatch("notifyError", {error: error});
			});
		}
	}
}
</script>