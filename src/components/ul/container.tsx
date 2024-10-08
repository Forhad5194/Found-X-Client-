export const Container = ( {children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            {children}
        </div>
    );
};

export default Container;