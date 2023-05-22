<template>
    <div class="w-16 h-full flex flex-col items-center justify-between py-2">
        <div class="h-14 w-14">
            <Logo />
        </div>
        <div>
            <div class="h-10 w-10 my-4">
                <Grid />
            </div>
            <div class="h-10 w-10 my-4">
                <Users />
            </div>
            <div class="h-10 w-10 my-4">
                <List />
            </div>
            <div class="h-10 w-10 my-4">
                <Settings />
            </div>
        </div>
        <div class="h-10 w-10 my-4">
            <Logout />
        </div>
    </div>
</template>

<script setup>
import Logo from '@/components/logo';
import Grid from '@/components/icons/grid';
import Users from '@/components/icons/users';
import List from '@/components/icons/list';
import Settings from '@/components/icons/settings';
import Logout from '@/components/icons/logout';
</script>