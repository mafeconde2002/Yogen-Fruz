-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.2
-- PostgreSQL version: 12.0
-- Project Site: pgmodeler.io
-- Model Author: ---


-- Database creation must be done outside a multicommand file.
-- These commands were put in this file only as a convenience.
-- -- object: new_database | type: DATABASE --
-- -- DROP DATABASE IF EXISTS new_database;
-- CREATE DATABASE new_database;
-- -- ddl-end --
-- 

-- object: public.item | type: TABLE --
-- DROP TABLE IF EXISTS public.item CASCADE;
CREATE TABLE public.item (
	item_id integer NOT NULL,
	item_name varchar(50) NOT NULL,
	item_price integer NOT NULL,
	item_cost integer NOT NULL,
	item_calories integer,
	item_proteins integer,
	CONSTRAINT item_pk PRIMARY KEY (item_id)

);
-- ddl-end --
-- ALTER TABLE public.item OWNER TO postgres;
-- ddl-end --

-- object: public."user" | type: TABLE --
-- DROP TABLE IF EXISTS public."user" CASCADE;
CREATE TABLE public."user" (
	user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
	user_name varchar(50) NOT NULL,
	user_password varchar(30),
	CONSTRAINT user_pk PRIMARY KEY (user_id)

);
-- ddl-end --
-- ALTER TABLE public."user" OWNER TO postgres;
-- ddl-end --

-- object: public.product | type: TABLE --
-- DROP TABLE IF EXISTS public.product CASCADE;
CREATE TABLE public.product (
	product_id smallint NOT NULL,
	CONSTRAINT product_pk PRIMARY KEY (product_id)

);
-- ddl-end --
-- ALTER TABLE public.product OWNER TO postgres;
-- ddl-end --

-- object: public."order" | type: TABLE --
-- DROP TABLE IF EXISTS public."order" CASCADE;
CREATE TABLE public."order" (
	order_id integer NOT NULL,
	order_price integer NOT NULL,
	user_id_user integer NOT NULL,
	CONSTRAINT order_pk PRIMARY KEY (order_id)

);
-- ddl-end --
-- ALTER TABLE public."order" OWNER TO postgres;
-- ddl-end --

-- object: public.product_descr | type: TABLE --
-- DROP TABLE IF EXISTS public.product_descr CASCADE;
CREATE TABLE public.product_descr (
	product_id_product smallint NOT NULL,
	item_id_item integer NOT NULL,
	CONSTRAINT product_descr_pk PRIMARY KEY (product_id_product)

);
-- ddl-end --
-- ALTER TABLE public.product_descr OWNER TO postgres;
-- ddl-end --

-- object: product_fk | type: CONSTRAINT --
-- ALTER TABLE public.product_descr DROP CONSTRAINT IF EXISTS product_fk CASCADE;
ALTER TABLE public.product_descr ADD CONSTRAINT product_fk FOREIGN KEY (product_id_product)
REFERENCES public.product (product_id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: item_fk | type: CONSTRAINT --
-- ALTER TABLE public.product_descr DROP CONSTRAINT IF EXISTS item_fk CASCADE;
ALTER TABLE public.product_descr ADD CONSTRAINT item_fk FOREIGN KEY (item_id_item)
REFERENCES public.item (item_id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: public.order_descr | type: TABLE --
-- DROP TABLE IF EXISTS public.order_descr CASCADE;
CREATE TABLE public.order_descr (
	order_id_order integer NOT NULL,
	product_id_product smallint NOT NULL,
	CONSTRAINT order_descr_pk PRIMARY KEY (order_id_order)

);
-- ddl-end --
-- ALTER TABLE public.order_descr OWNER TO postgres;
-- ddl-end --

-- object: order_fk | type: CONSTRAINT --
-- ALTER TABLE public.order_descr DROP CONSTRAINT IF EXISTS order_fk CASCADE;
ALTER TABLE public.order_descr ADD CONSTRAINT order_fk FOREIGN KEY (order_id_order)
REFERENCES public."order" (order_id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: product_fk | type: CONSTRAINT --
-- ALTER TABLE public.order_descr DROP CONSTRAINT IF EXISTS product_fk CASCADE;
ALTER TABLE public.order_descr ADD CONSTRAINT product_fk FOREIGN KEY (product_id_product)
REFERENCES public.product (product_id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: user_fk | type: CONSTRAINT --
-- ALTER TABLE public."order" DROP CONSTRAINT IF EXISTS user_fk CASCADE;
ALTER TABLE public."order" ADD CONSTRAINT user_fk FOREIGN KEY (user_id_user)
REFERENCES public."user" (user_id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --


