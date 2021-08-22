<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { DropdownOption} from "../../types/Dropdown";

    export let option: DropdownOption;

    const dispatch = createEventDispatcher();
</script>

<button tabindex="-1" on:click={dispatch('click', option)} class="dropdown-item fs12p text-white p-12">
    <div class="d-flex align-items-center">
        <slot />
    </div>
</button>

<style lang="scss">
    .dropdown-item {
        background-color: #38383D;

        &:hover {
            background-color: #47464E;
        }

        &:not(:first-child){
            border-top: 1px solid #2E2D30
        }

        &:first-child {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;;
        }

        &:last-child {
            border-bottom-left-radius: 0.25rem;;
            border-bottom-right-radius: 0.25rem;;
        }
    }
</style>