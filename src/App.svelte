<script lang="ts">
	import Dropdown from "./components/Dropdown/Dropdown.svelte";
	import { DropdownOption } from "./types/Dropdown";

	const options: DropdownOption[] = [
		{
			id: 1,
			name: 'Pozycja 1'
		},
		{
			id: 2,
			name: 'Pozycja 2'
		},
		{
			id: 3,
			name: 'Pozycja 3'
		},
		{
			id: 4,
			name: 'Pozycja 4'
		},
		{
			id: 5,
			name: 'Pozycja 5'
		},
		{
			id: 6,
			name: 'Pozycja 6'
		},
		{
			id: 7,
			name: 'Pozycja 7'
		},
	];
</script>

<Dropdown {options}/>

