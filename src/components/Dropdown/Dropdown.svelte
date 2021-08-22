<script lang="ts">
    import DropdownOptionItem from './DropdownOptionItem.svelte'
    import { DropdownOption, ExtensiveOption } from "../../types/Dropdown";

    export let options: DropdownOption[] = [];

    let selected: DropdownOption = options[0];

    // toggleMenu() nie potrzebne powinno działać z samą klasą boostrapową
    function toggleMenu() {
        const menu = document.querySelector('.dropdown-menu');
        menu.classList.toggle('show');
    }

    function handleSelect(e: CustomEvent): void {
        const id = e.detail.id;
        const selectedArr = options.filter(option => option.id === id);
        selected = selectedArr[0];
        toggleMenu(); // do wywalenia
    }

    function isExtensiveOption(option: DropdownOption): option is ExtensiveOption {
        return 'iconName' in option && typeof option.iconName === 'string';
    }

</script>

<div class="dropdown w-160">
    <button 
        class="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center w-100 px-3 py-2 " 
        type="button" 
        id="dropdownBtn" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
        on:click={toggleMenu}
    >
        {#if isExtensiveOption(selected)}
            <img class="img" src="./dist/img/icons/{selected.iconName}.png" alt="selected icon" />
            <span class="fs12p fw-500 mr-3">{selected.name}</span>
        {:else} 
            <span class="fs12p fw-500">{selected.name}</span>
        {/if}
        <i class="fas fa-angle-down"></i> <!-- W zaleznosci od wymaganej ikony-->
    </button>

    <div class="dropdown-menu p-0" aria-labelledby="dropdownBtn">
        {#each options as option}
            <DropdownOptionItem on:click={handleSelect} option={option}>
                {#if isExtensiveOption(option)}
                    <img class="img" src="./dist/img/icons/{option.iconName}.png" alt="option icon" />
                    <span class="ml-2 d-none d-sm-block">{option.name}</span>
                {:else}
                    <span>{option.name}</span>
                {/if}
            </DropdownOptionItem>
        {/each}
    </div>
</div>

<style lang="scss">
    // do wywalenia
    .btn-secondary {
	    background-color: #47464E;
    }

    // Jezeli potrzeba innej ikony
    .dropdown-toggle::after {
        display: none;
    }
</style>