<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="/" class="brand-link">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTHJhsty9HM-aiUUPIFYslTFTBac-7ScBlW2_CFLSwW_89HytC&usqp=CAU" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">User Name</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item">
                                <router-link to="/" exact class="nav-link">
                                    <i class="fas fa-tachometer-alt nav-icon"></i>
                                    <p>Dashboard</p>
                                </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/users" exact class="nav-link">
                            <i class="nav-icon fas fa-users"></i>
                            <p>
                                Users
                            </p>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
<style scoped>
.router-link-exact-active, .router-link-exact-active:hover, .router-link-exact-active:focus {
    background-color: #007bff !important;
    color: #fff !important;
}
</style>